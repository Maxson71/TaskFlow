import {Tag} from "@/app/widgets/tag/tag";

export default function Home() {
  return (
    <div className="flex justify-center content-center font-semibold">
      Public Page
        <Tag text="AI"/>
        <Tag text="Sport"/>
        <Tag text="Program"/>
        <Tag text="Python"/>
    </div>
  );
}
