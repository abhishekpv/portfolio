type PositionCardBodyProps = {
  responsobilities: string[];
};
const PositionCardBody = ({ responsobilities }: PositionCardBodyProps) => {
  return (
    <ul className="text-base text-justify list-disc ml-5 text-gray-800 p-5 flex flex-col gap-3 py-5">
      {responsobilities.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
};

export default PositionCardBody;
