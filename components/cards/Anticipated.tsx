import Link from "next/link";

const Anticipated = () => {
  return (
    <Link href={"/"}>
      <div className="relative mt-10 px-10 py-5 rounded-lg bg-anticipated-bg bg-cover bg-no-repeat cursor-pointer">
        <div className="absolute inset-0 bg-black bg-opacity-10 hover:bg-opacity-0 transition-opacity z-10"></div>
        <div className="relative ">
          <h1 className="text-body1-bold">Anticipated</h1>
          <p className="mt-2 text-base-regular text-light-2">Coming soon</p>
          <div className="flex justify-between mt-3">
            <TimeUnit unit="Days" numbers={[0, 1]} />
            <div className="border-white border-l-4 h-20 mt-4"></div>
            <TimeUnit unit="Hours" numbers={[0, 1]} />
            <div className="border-white border-l-4 h-20 mt-4"></div>
            <TimeUnit unit="Minutes" numbers={[0, 1]} />
          </div>
        </div>
      </div>
    </Link>
  );
};

const TimeUnit = ({ unit, numbers }: { unit: string; numbers: number[] }) => (
  <div className="flex gap-4 items-center flex-col">
    <div className="grid grid-cols-2 gap-4">
      {numbers.map((number, index) => (
        <div
          key={index}
          className="text-heading1-bold h-28 bg-[#292b2c] bg-opacity-90 rounded-md px-4 flex items-center"
        >
          {number}
        </div>
      ))}
    </div>
    <p className="uppercase">{unit}</p>
  </div>
);

export default Anticipated;
