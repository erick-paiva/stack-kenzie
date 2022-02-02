import { Flex, useDisclosure, Button } from '@chakra-ui/react';

import ModalChakra from '../ModalChakra';
import DisplayTags from '../../components/DisplayTags';

export default function AddTag({ tagSelected, setTagSelected }) {
	const handleTagClick = (value) => {
		if (!tagSelected.some((e) => e === value)) {
			setTagSelected([ ...tagSelected, value ]);
		} else {
			setTagSelected(tagSelected.filter((e) => e !== value));
		}
		console.log(tagSelected);
	};

	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<div>
			<Button onClick={onOpen} variant="ButtonBorderedSmall">
				Adicionar Tags
			</Button>
			<ModalChakra title="Adicionar tags" isOpen={isOpen} onClose={onClose}>
				<Flex
					h="fitContent"
					w="100%"
					mt="20px"
					justifyContent="center"
					alignItems="center"
					flexWrap={'wrap'}
					p="0 0 20px"
				>
					<DisplayTags handleTagClick={handleTagClick} tagsSelected={tagSelected} />
				</Flex>
			</ModalChakra>
		</div>
	);
}
