'use client';
import { Image, Box, Button, Container, Flex, Grid, GridItem, Heading, Icon, Text, List, ListItem, ListIcon, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Input, FormControl, useColorModeValue, Spinner } from '@chakra-ui/react'
import Logo from '@/components/logo';

import { HiPlus } from 'react-icons/hi';
import TextTaged from '@/components/TextTaged';

import { useState, useEffect} from "react";

import { FaLongArrowAltRight } from "react-icons/fa"
import { FormProvider, useForm } from 'react-hook-form';
import { SubscribeProps } from '@/types';
import { useSubscribeEmail } from '@/data/email';
import { emailClient } from '@/data/client/email';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

const Cta = () => {
    
    const { mutate, isLoading, error  } = useSubscribeEmail();

	const bgList = useColorModeValue('white', 'whiteAlpha.100');
	const bgShadow = useColorModeValue('14px 17px 40px 4px rgba(112, 144, 176, 0.08)', 'unset');

    const methods = useForm<SubscribeProps>({ mode: "onBlur" });

    const router = useRouter();

    const [ errorEmail, setErrorEmail ] = useState(false);

	const {
		register,
		handleSubmit,
        getValues,
		formState: { errors },
        watch,
	} = methods;

    function isValidEmail(email: string) {
        return /\S+@\S+\.\S+/.test(email);
    }

	const handleSubscribeOnCourse = async (
        data: SubscribeProps,
		e?: React.BaseSyntheticEvent // This one specifically.
	) => {
		e?.preventDefault();

        const validEmail = isValidEmail(data.email);
        
        setErrorEmail(!validEmail);

        if (!validEmail) {
            toast.error('Email com formato inválido');
            return;
        }

        await mutate({
            email: data.email,
            conversionIdentifier: "InglesETal"
        },
        {
            onSuccess: (data: any) => {
                toast.success('Cadastrado')
                router.push("/inscricao-confirmada");
            },
            onError: (err: any) => {
                toast.error('Ocorreu um erro, tente novamente!');
                return
            },
        });
	};



    return (
        <Flex
            w={'full'}
            marginTop={"5vh"}
            padding={{base: "0 2vh", md: "2vh" }}
            alignItems={"center"}
            justifyContent={"center"}
            direction={"column"}
            gap={"4vh"}
        >
            <Flex
                marginTop={{base: "2vh", md: "0"}}
                maxW={"1300"}
            >
                <Flex
                    padding={"2vh"}
                    id={"subscription"}

                    border='transparent'
                    backdropFilter='blur(20px)'
                    bg={bgList}
                    boxShadow={bgShadow}
                    direction={"column"}
                    borderRadius={"7px"}

                    justifyContent={"center"}
                    alignItems={"center"}
                    position={"relative"}
                >

                    {
                        isLoading &&
                        <Flex
                            w={"100%"}
                            h={"100%"}
                            position={"absolute"}

                            backdropFilter='blur(20px)'
                            borderRadius={"7px"}

                            bg={"rgba(20,20,20, .5)"}

                            justifyContent={"center"}
                            alignItems={"center"}

                            zIndex={999}
                        >
                            <Spinner />
                        </Flex>
                    }

                    <Text
                        fontWeight={"normal"}
                        fontSize={"1.2rem"}
                        fontFamily={"var(--font-monserrat)"}
                        textAlign={"center"}
                        marginBottom={"2vh"}
                        maxW={"500px"}
                    >
                        Clique no botão abaixo e dê o primeiro passo para conquista, sua fluência no inglês:
                    </Text>
                
                    <FormControl>
                        <FormProvider {...methods}>
                            <form action="" noValidate className="w-80 mx-auto pb-12 px-4" onSubmit={handleSubmit(handleSubscribeOnCourse)}>
                                <Flex
                                    direction={"column"}
                                    justifyContent={"center"}
                                    alignItems={"center"}
                                    gap={"2vh"}
                                >
                                    {errorEmail && <Text fontSize={"sm"} color={"red.400"}> Email com formato inválido </Text>}
                                    {errors.email && <Text fontSize={"sm"} color={"red.400"}>{errors.email.message}</Text>}
                                    <Input
                                        placeholder='Insira seu melhor email'
                                        padding={"3vh 1vh"}
                                        fontSize={"1.3em"}
                                        color={"var(--color-secondary)"}
                                        w={"80%"}
                                        {...register("email", { required: "É obrigatório informar um email." })}
                                    />
                                    <Button
                                        background={"var(--color-primary)"}
                                        borderRadius={"15px"}
                                        padding={"3.5vh 4vh"}
                                        fontSize={{base: "1em", md :"1.2em"}}
                                        fontFamily={"var(--font-monserrat)"}
                                        fontWeight={"bold"}
                                        className={"pulse"}
                                        _hover={{
                                            background: "var(--color-secondary)"
                                        }}
                                        type='submit'

                                        disabled={isLoading}
                                    >
                                        QUERO SER FLUENTE EM INGLÊS <Icon marginLeft={"1vh"} as={FaLongArrowAltRight} />
                                    </Button>

                                    <Box
                                        maxW={"400px"}
                                        opacity={"0.5"}
                                        lineHeight={"1em"}
                                        paddingInline={"2vh"}
                                    >
                                        <small>
                                            Prometemos não usar nenhuma informação de contato para enviar qualquer tipo de SPAM.
                                            Os dados coletados são tratados nos termos da Lei Geral de Proteção de Dados e você
                                            pode se descadastrar da nossa lista a qualquer momento.
                                        </small>
                                    </Box>
                                </Flex>
                            </form>
                        </FormProvider>
                    </FormControl>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Cta;