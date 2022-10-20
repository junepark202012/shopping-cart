import Image from "next/future/image";
import ButtonGroup from "./store/ButtonGroup";
import ButtonGroupItem from "./store/ButtonGroupItem";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import { formatCurrency } from "../utils/formatCurrency";

interface StoreItemProps {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

export default function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div key={id} className="group relative self-stretch">
        <div className="aspect-w-1 aspect-h-1 !relative min-h-[20rem] w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
          <Image
            src={imgUrl}
            alt={name}
            className="lg: h-full w-full object-cover object-center"
            fill
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href="/temp">
                <span aria-hidden="true" className="absolute inset-0" />
                {name}
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{name}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">
            {formatCurrency(price)}
          </p>
        </div>
      </div>
      <ButtonGroup>
        <ButtonGroupItem className={"rounded-l-md"}>
          <MinusIcon className="h-4 w-4" />
        </ButtonGroupItem>
        <ButtonGroupItem>7</ButtonGroupItem>
        <ButtonGroupItem className={"rounded-r-md"}>
          <PlusIcon className="h-4 w-4" />
        </ButtonGroupItem>
      </ButtonGroup>
    </div>
  );
}
