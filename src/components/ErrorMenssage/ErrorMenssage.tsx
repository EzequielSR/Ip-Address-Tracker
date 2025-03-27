interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  if (!message) return null;
  
  return (
    <div className="mt-4 text-red-500 bg-white px-4 py-2 rounded shadow-md">
      {message}
    </div>
  );
}