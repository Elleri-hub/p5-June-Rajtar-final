"use client";

import { Button } from "@heroui/button";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { addToast } from "@heroui/toast";

export default function PricingPage() {
  const thisDoesNothingToast = () => {
    addToast({
      title: "Ordered!",
      description:
        "Congragulations you have ordered at McDonalds, enjoy your order!",
      color: "danger",
    });
  };

  return (
    <div>
      <h1 className="color : bg-red-600 text-center text-5xl">Ordering</h1>
      <section className="mt-20">
        <h2 className="color : bg-yellow-400 text-center text-3xl">Menu</h2>
        <div className="flex justify-center gap-8 mt-20">
          {/* plan 1 */}
          <Card className="p-6 w-1/3">
            <CardHeader>
              <div className="text-3xl text-center w-full font-extrabold text-primary">
                $6 McDouble Meal Deal
                <span className="text-sm" />
              </div>
            </CardHeader>
            <CardBody>
              <ul className="list-disc pl-5 text-xl">
                <li>McDouble sandwich</li>
                <li>4-Piece chicken nuggets</li>
                <li>Small world famous fries</li>
                <li>Small Coca-Cola</li>
              </ul>
            </CardBody>
            <CardFooter className="justify-center">
              <Button
                color="primary"
                radius="full"
                onPress={() => {
                  thisDoesNothingToast();
                }}
              >
                Order
              </Button>
            </CardFooter>
          </Card>

          {/* plan 2 */}
          <Card className="p-6 w-1/3">
            <CardHeader>
              <div className="text-3xl text-center w-full font-extrabold text-secondary">
                $5 McChicken Meal Deal <span className="text-sm" />
              </div>
            </CardHeader>
            <CardBody>
              <ul className="list-disc pl-5 text-xl">
                <li>McChicken Sanwich</li>
                <li>4-piece chicken nuggets</li>
                <li>Small world famous fries</li>
                <li>Small soft drink</li>
              </ul>
            </CardBody>
            <CardFooter className="justify-center">
              <Button
                color="secondary"
                radius="full"
                onPress={() => {
                  thisDoesNothingToast();
                }}
              >
                Order
              </Button>
            </CardFooter>
          </Card>

          {/* plan 3 */}
          <Card className="p-6 w-1/3">
            <CardHeader>
              <div className="text-3xl text-center w-full font-extrabold text-success">
                $4 Breakfast Meal Deal
              </div>
            </CardHeader>
            <CardBody>
              <ul className="list-disc pl-5 text-xl">
                <li>Choose 1: Sausage McMuffin or Sausage Biscuit</li>
                <li>Comes with Hashbrown</li>
                <li>Comes with a small McCafe Premium Roast Coffee</li>
              </ul>
            </CardBody>
            <CardFooter className="justify-center">
              <Button
                color="success"
                radius="full"
                onPress={() => {
                  thisDoesNothingToast();
                }}
              >
                Order
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  );
}
