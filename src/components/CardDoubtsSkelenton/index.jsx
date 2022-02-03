import {
  Center,
  Flex,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";

export default function CardDoubtsSkelenton({ amount }) {
  const [isMobile] = useMediaQuery("(max-width: 900px)");
  return (
    <>
      {amount.map((ele) => (
        <Flex
          padding="30px"
          boxShadow="lg"
          bg="white"
          w="100%"
          alignItems="center"
          key={ele}
          flexDirection={isMobile ? "column" : "row"}
          justifyContent="space-between"
        >
          {!isMobile && (
            <>
              <SkeletonCircle size="12" />
              <VStack marginX="20px" w="70%">
                <Skeleton height="20px" w="100%" mb="10px" />
                <SkeletonText
                  mt="4"
                  height="70px"
                  noOfLines={3}
                  spacing="4"
                  w="100%"
                />
                <Skeleton height="20px" w="100%" />
              </VStack>
              <VStack w="30%">
                <Skeleton height="30px" w="100%" />
                <SkeletonText
                  mt="4"
                  height="70px"
                  noOfLines={3}
                  spacing="4"
                  w="100%"
                />
                <Skeleton height="30px" w="100%" />
              </VStack>
            </>
          )}

          {isMobile && (
            <Flex justifyContent="space-between" w="100%">
              <SkeletonCircle size="20" />
              <VStack>
                <Skeleton height="30px" w="150px" />
                <SkeletonText
                  mt="4"
                  height="70px"
                  noOfLines={3}
                  spacing="4"
                  w="150px"
                />
                <Skeleton height="30px" w="150px" />
              </VStack>
            </Flex>
          )}

          {isMobile && (
            <VStack marginX="20px" w="100%" mt="15px">
              <Skeleton height="20px" w="100%" mb="10px" />
              <SkeletonText
                mt="4"
                height="70px"
                noOfLines={3}
                spacing="4"
                w="100%"
              />
              <Skeleton height="20px" w="100%" />

              <Center>
                <Skeleton height="30px" w="100px" />
              </Center>
            </VStack>
          )}
        </Flex>
      ))}
    </>
  );
}
