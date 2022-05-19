import React from "react";
import { Badge, Box, Image, SimpleGrid } from "@chakra-ui/react";
import { LinkBox, LinkOverlay } from '@chakra-ui/react'
import ProjectInfo from "../ProjectInfo";
const Grid = () => {
  return (
    <div>
      <SimpleGrid
        columns={{ base: 2, sm: 1, lg: 3, xl: 3 }}
        mx={250}
        spacing={20}
        mt={10}
        my={20}
      >
        {ProjectInfo  &&
          ProjectInfo?.map((project) => {
            return (
              <LinkBox
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                bg={'purple.50'}
              >
                   <Image src={project.img} alt={project.name}/>

                <Box p="6">
                  <Box display="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2" colorScheme="purple">
                      {project.status}
                    </Badge>
                  </Box>
                  <LinkOverlay href={project.url}>
                  <Box
                    fontSize="xl"
                    ml="2"
                    mt="5"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                    color={'purple.900'}

                  >
                    {project.name}
                  </Box>
                  </LinkOverlay>
                </Box>
              </LinkBox>
            );
          })}
      </SimpleGrid>
    </div>
  );
};

export default Grid;
