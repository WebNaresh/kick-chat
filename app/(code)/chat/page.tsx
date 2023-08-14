import Chat from "./components/chat";
import Contacts from "./components/contact";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="flex w-full h-full">
      <section className="grid grid-cols-12 flex-grow">
        <div className="md:col-span-4 lg:col-span-4 col-span-12 border-r-2 border-gray-900">
          <Contacts />
        </div>
        <div className="col-span-8 hidden lg:block md:block">
          <Chat />
        </div>
      </section>
    </div>
  );
};

export default Page;
