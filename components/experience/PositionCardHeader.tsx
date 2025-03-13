type PositionCardHeaderProps = {
  position: {
    position: string;
    startDate: string;
    endDate: string;
    duration: string;
    location: string;
    locationHref: string;
    responsobilities: string[];
  };
};

const PositionCardHeader = ({ position }: PositionCardHeaderProps) => {
  return (
    <div className="flex items-center justify-between w-full p-5 border-b dark:border-gray-600">
      <h3 className="text-xl">{position.position}</h3>
      <div className="text-xs text-gray-700 dark:text-white/75 text-right">
        <p className="mb-1">{position.startDate + " - " + position.endDate}</p>
        <a href={position.locationHref} target="_blank">
          {position.location}
        </a>
      </div>
    </div>
  );
};

export default PositionCardHeader;
