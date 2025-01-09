import { BlockStack, Box, Icon,Button, InlineStack, Text } from "@shopify/polaris";
import {
  XIcon
} from '@shopify/polaris-icons';
export default function ModalBox({
  handleClose,
  handleOk,
  status,
}) {

  return (
    <div className={`sd-bundle-modalbox-container ${status ? "active" : ""}`}>
      <Box
        // position="relative"
        borderRadius="200"
        width="100%"
        maxWidth="500px"
        background="bg-fill"
      >
        <Box
          background="bg-surface-tertiary"
          padding={400}
          borderStartStartRadius="200"
          borderStartEndRadius="200"
        >
          <InlineStack align="space-between">
            <Text as="h3" variant="headingSm">
            Going back?
            </Text>
            <Button variant="plain" onClick={handleClose} >
              <Icon source={XIcon} tone='primary' />
            </Button>
          </InlineStack>
        </Box>

        <>
          <Box padding={400}>
            <BlockStack gap={200}>
              <Text as="p" variant="bodyMd">
                Are you sure you want to go back? All unsaved changes will be
                lost.
              </Text>
            </BlockStack>
          </Box>
          <InlineStack
            blockAlign="center"
            wrap={true}
            gap={400}
            direction="row"
          >
            <Box
              padding={400}
              borderColor="border"
              borderStyle="solid"
              width="100%"
              borderBlockStartWidth="025"
            >
              <InlineStack gap={150} align="end">
                <Button variant='tertiary'  onClick={handleClose}>Cancel</Button>
                <Button variant='primary' onClick={handleOk}>
                  Ok
                </Button>
              </InlineStack>
            </Box>
          </InlineStack>
        </>
      </Box>
    </div>
  );
}