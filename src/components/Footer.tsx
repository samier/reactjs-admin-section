import { Box, Container, Text } from '@gilbarbara/components';

function Footer() {
  const name = 'Demo';

  return (
    <Box as="footer" border={{ size: 1, side: 'top', color: 'gray.200' }}>
      <Container py="lg">
        {/* <Box flexBox justify="space-between"> */}

        <Box align="flex">
          <Text color="gray.600">
            © {new Date().getFullYear()} {name}
          </Text>
        </Box>

        {/* </Box> */}
      </Container>
    </Box>
  );
}

export default Footer;
