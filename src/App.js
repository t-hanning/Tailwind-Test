import "./styles.css";
import { Disclosure } from "@headlessui/react";

export default function App() {
  return (
    <Disclosure>
      <Disclosure.Button className="py-2">
        Is team pricing available?
      </Disclosure.Button>
      <Disclosure.Panel className="bg-slate-900 text-gray-500">
        Yes! You can purchase a license that you can share with your entire
        team.
      </Disclosure.Panel>
    </Disclosure>
  );
}
