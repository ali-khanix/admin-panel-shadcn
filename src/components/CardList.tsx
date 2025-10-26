import Image from "next/image";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const popularContent = [
  {
    id: 1,
    title: "JavaScript Tutorial",
    badge: "Coding",
    image:
      "https://img.freepik.com/free-photo/selfie-portrait-videocall_23-2149186122.jpg?semt=ais_hybrid&w=740&q=80",
    count: 4300,
  },
  {
    id: 2,
    title: "Tech Trends 2025",
    badge: "Tech",
    image:
      "https://img.freepik.com/free-photo/portrait-smiley-woman_23-2148827181.jpg?semt=ais_hybrid&w=740&q=80",
    count: 3200,
  },
  {
    id: 3,
    title: "The Future of AI",
    badge: "AI",
    image:
      "https://img.freepik.com/free-photo/attractive-positive-pensive-young-woman-cafe_23-2148071693.jpg?semt=ais_hybrid&w=740&q=80",
    count: 2400,
  },
  {
    id: 4,
    title: "React Hooks Explained",
    badge: "Coding",
    image:
      "https://img.freepik.com/free-photo/close-up-blonde-model_23-2148323689.jpg?semt=ais_hybrid&w=740&q=80",
    count: 1500,
  },
  {
    id: 5,
    title: "Image Generation with AI",
    badge: "AI",
    image:
      "https://img.freepik.com/free-photo/happy-businessman-smiling-camera_1163-4660.jpg?semt=ais_hybrid&w=740&q=80",
    count: 1200,
  },
];

const latestTransactions = [
  {
    id: 1,
    title: "Subscription Renewal",
    badge: "John Doe",
    image:
      "https://img.freepik.com/premium-photo/close-up-confident-bearded-businessman-gray-suit_1258-33534.jpg",
    count: 1400,
  },
  {
    id: 2,
    title: "Payment for Services",
    badge: "Jane Smith",
    image:
      "https://img.freepik.com/free-photo/happy-bearded-man-business-clothes-looking-camera_171337-11392.jpg",
    count: 2100,
  },
  {
    id: 3,
    title: "Subscription Renewal",
    badge: "Michael Johnson",
    image:
      "https://img.freepik.com/premium-photo/spirit-expertise-smiling-bearded-businessman-shirt-confident-guy-with-bristle_474717-56829.jpg",
    count: 1300,
  },
  {
    id: 4,
    title: "Payment for Services",
    badge: "Lily Adams",
    image:
      "https://img.freepik.com/premium-photo/spirit-expertise-smiling-bearded-businessman-shirt-confident-guy-with-bristle_474717-56829.jpg",
    count: 2500,
  },
  {
    id: 5,
    title: "Subscription Renewal",
    badge: "Sam Brown",
    image:
      "https://img.freepik.com/premium-photo/spirit-expertise-smiling-bearded-businessman-shirt-confident-guy-with-bristle_474717-56829.jpg",
    count: 1400,
  },
];

const CardList = ({ title }: { title: string }) => {
  const list =
    title === "Popular Content" ? popularContent : latestTransactions;
  return (
    <div>
      <h1 className="font-medium mb-6">{title}</h1>
      {
        <div className="flex flex-col gap-2">
          {list.map((item) => (
            <Card
              key={item.id}
              className="flex flex-row items-center justify-between gap-4 p-4"
            >
              <div className="w-12 h-12 rounded-sm relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <CardContent className="p-0 flex-1">
                <CardTitle className="text-sm font-medium">
                  {item.title}
                </CardTitle>
                <Badge variant={"secondary"}>{item.badge}</Badge>
              </CardContent>

              <CardFooter className="p-0">{item.count / 1000}k</CardFooter>
            </Card>
          ))}
        </div>
      }
    </div>
  );
};

export default CardList;
