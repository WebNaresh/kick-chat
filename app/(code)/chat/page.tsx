import Chat from "./components/chat";
import Contacts from "./components/contact";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="flex w-full h-full">
      <section className="grid grid-cols-12 flex-grow">
        <div className="col-span-4 border-r-2 border-gray-900">
          <Contacts />
        </div>
        <div className="col-span-8">
          <Chat />
        </div>
      </section>
    </div>
  );
};

export default Page;
