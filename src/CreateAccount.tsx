import { Button, Flex, Heading, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

type LoginRegisterType = {
  email: string;
  password: string;
};

const CreateAccount = () => {
  const { register, handleSubmit } = useForm<LoginRegisterType>();

  const createAccount = (formData: LoginRegisterType) =>
    console.log("formData: ", formData);

  return (
    <form onSubmit={handleSubmit(createAccount)}>
      <Flex flexDirection="column" justify={"center"} align="center">
        <Heading>Create an account</Heading>
        <Input
          type="email"
          {...register("email")}
          width="17rem"
          placeholder="email@email.com"
          mb="0.5rem"
        />
        <Input
          type="password"
          {...register("password")}
          width="17rem"
          placeholder="********"
          mb="0.5rem"
        />
        <Button colorScheme="purple" color="white" type="submit">
          Create account
        </Button>
      </Flex>
    </form>
  );
};

export default CreateAccount;
