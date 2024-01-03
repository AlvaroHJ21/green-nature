export default function Button(props: any) {
  const { children } = props;

  return (
    <a
      href="/"
      className="uppercase text-xgreen-800 text-[13px] bg-xyellow-300 py-4 px-8 font-semibold"
    >
      {children}
    </a>
  );
}
