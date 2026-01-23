type Props = {
  output: string;
};

export default function AIOutput({ output }: Props) {
  return (
    <div className="mt-4 p-4 border rounded-xl bg-card whitespace-pre-wrap text-sm">
      {output}
    </div>
  );
}
