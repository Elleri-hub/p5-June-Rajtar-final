"use client";

import { Card, CardBody, CardHeader } from "@heroui/card";
import { addToast } from "@heroui/toast";

export default function BlogPage() {
  const Post = ({
    title,
    date,
    description,
  }: {
    title: string;
    date: Date;
    description: string;
  }) => {
    return (
      <Card
        isHoverable
        isPressable
        className="p-4 w-full"
        onPress={() => {
          addToast({
            title: "Hey!",
            description:
              "This doesn't link anywhere. But you can make it so it does!",
            color: "danger",
          });
        }}
      >
        <CardHeader className="flex justify-between">
          <h3 className="text-xl font-bold">{title}</h3>
          <div className="text-sm text-default-500">
            {date.toLocaleDateString()}
          </div>
        </CardHeader>
        <CardBody>
          <p className="text-default-600">{description}</p>
        </CardBody>
      </Card>
    );
  };

  return (
    <div>
      <h1 className="color : bg-red-600 text-center text-5xl">
        $6 McDouble Meal Deal
      </h1>
      <div>
        <img
          alt="meal 1"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTeslFD_LOytgcXT8YGmtFqzRfcYXdBBilAw&s"
        />
      </div>
      <h1 className="color : bg-yellow-300 text-center text-5xl">Dietary</h1>
      <p>Calories: 1,090</p>
      <p>Total Fat: 52g (66% DV)</p>
      <p>Saturated Fat: 14g (68% DV)</p>
      <p>Cholesterol: 105mg (34% DV)</p>
      <p>Sodium: 1,390mg (60% DV)</p>
      <p>Total Carbohydrates: 124g (45% DV)</p>
      <p>Dietary Fiber: 5g (17% DV)</p>
      <p>Total Sugars: 58g (114% DV)</p>
      <p>Added Sugars: 56g</p>
      <p>Protein: 34g</p>
      <p>Calcium: 116mg (8% DV)</p>
      <p>Iron: 4.5mg (26% DV)</p>
      <p>Potassium: 950mg (20% DV)</p>

      <h1 className="color : bg-red-600 text-center text-5xl">Allergens</h1>
      <p />
      <p>Beef (100% pure, no fillers)</p>
      <p>Wheat (in bun and some ingredients)</p>
      <p>Milk (in American cheese)</p>
      <p>Soy (in cheese, mayonnaise, and some nugget batters)</p>
      <p>Egg (in mayonnaise)</p>
      <p>May contain sesame </p>
    </div>
  );
}
