interface Props {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: Props) {
  return (
    <div className="h-full flex justify-center items-center">{children}</div>
  );
}
