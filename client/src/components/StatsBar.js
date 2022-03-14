import PropTypes from 'prop-types';
import Terrain from './Terrain';
import {Box, Flex, HStack, Heading, Text, Wrap} from '@chakra-ui/react';

const StatsItem = ({value, label, unit}) => (
  <Flex
    direction="column"
    justifyContent="space-between"
    alignItems="center"
    textAlign="center"
    minHeight="75"
  >
    {unit ? (
      <>
        <HStack spacing="1">
          <Heading size="lg">{value}</Heading>
          <Text>{unit}</Text>
        </HStack>
        <Text fontWeight="bold" color="brand.light">
          {label}
        </Text>
      </>
    ) : (
      <>
        <Heading size="lg">{value}</Heading>
        <Text fontWeight="bold" color="brand.light">
          {label}
        </Text>
      </>
    )}
  </Flex>
);

StatsItem.propTypes = {
  value: PropTypes.string || PropTypes.number,
  label: PropTypes.string,
  unit: PropTypes.string
};

const StatsBar = ({stats, type, terrain}) => {
  const {
    gravity,
    averageTemperature,
    lengthOfDay,
    exosuitRequired,
    groupSize,
    minimumAge
  } = stats;
  const isActivity = type === 'Activity';

  return (
    <Box py="8">
      <Heading size="md" py="4">
        {type} Stats
      </Heading>
      <Wrap spacing="12">
        <Flex
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          textAlign="center"
          minHeight="75"
        >
          <Terrain terrain={terrain} />
          <Text fontWeight="bold" color="brand.light">
            Terrain
          </Text>
        </Flex>
        <StatsItem value={gravity ?? 'N/A'} label="Gravity" />
        <StatsItem
          value={minimumAge ? `${minimumAge}+` : 'N/A'}
          label="Age requirement"
        />
        <StatsItem
          value={averageTemperature}
          label="Average temp"
          unit="&#176;C"
        />
        <StatsItem value={lengthOfDay} label="Length of day" unit="hr" />

        {isActivity && (
          <>
            <StatsItem value={groupSize} label="Group size" />
            <StatsItem
              value={exosuitRequired ? 'Yes' : 'No'}
              label="Exosuit required"
            />
          </>
        )}
      </Wrap>
    </Box>
  );
};

export default StatsBar;

StatsBar.propTypes = {
  stats: PropTypes.object,
  type: PropTypes.string,
  terrain: PropTypes.string
};
