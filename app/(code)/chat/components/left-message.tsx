type Props = {};

const LeftMessage = (props: Props) => {
  return (
    <div className="chat-message">
      <div className="flex items-end">
        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
          <div>
            <span className="px-4 py-2 rounded-lg rounded-bl-none inline-block bg-gray-800 text-white">
              FYI https://askubuntu.com/a/700266/510172
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftMessage;
