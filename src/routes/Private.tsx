import { Box, Jumbo, Page, Paragraph } from '@gilbarbara/components';

function Private() {
  return (
    <Page key="Private" data-component-name="Private">
      <Box mb="lg" textAlign="center">
        <Jumbo mb={0}>Oh hai!</Jumbo>
        <Paragraph>This is a private page</Paragraph>
      </Box>
    </Page>
  );
}

export default Private;
