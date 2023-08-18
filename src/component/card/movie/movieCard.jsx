import {Card, CardBody, CardFooter, CardHeader, Image} from "@nextui-org/react";
import { motion } from "framer-motion";

export const MovieCard = (item) => {
    const items = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };
  return(
      <motion.div variants={items}>
          <Card shadow="sm" dir={'rtl'} key={item.id} isPressable
                onPress={() => console.log("item pressed")}>
              <CardBody className="overflow-visible p-0 ">
                  <Image
                      isBlurred
                      width={240}
                      src={item.img}
                      alt="NextUI Album Covesr"
                      classNames="m-5"
                  />
              </CardBody>
          </Card>
      </motion.div>


  )
}