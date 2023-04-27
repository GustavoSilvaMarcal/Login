import { ChakraProvider, Box, Button, Flex, FormControl, FormLabel, Heading, Input, Stack } from '@chakra-ui/react'
import './app.css';

function App() {
  return (
    <ChakraProvider>
      <Box className="container">
        <Box className="form-wrapper">
          <Heading className="form-heading" size="xl" fontWeight="extrabold">
            Bem-Vindo
          </Heading>
          <form>
            <FormControl id="email" className="form-control">
              <FormLabel>Email</FormLabel>
              <Input type="email" autoComplete="email" required />
            </FormControl>

            <FormControl id="password" className="form-control">
              <FormLabel>Senha</FormLabel>
              <Input type="password" autoComplete="current-password" required />
            </FormControl>

            <Button colorScheme="blue" size="lg" fontSize="md" className="form-button">
              Entrar
            </Button>
          </form>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
