type Props = {
  title: string;
  description: string;
};

export default function FlowNode({ title, description }: Props) {
  return (
    <div className="border rounded-xl p-4 bg-card shadow-sm">
      <h4 className="font-medium">{title}</h4>
      <p className="text-sm opacity-70 mt-1">{description}</p>
    </div>
  );
}
