import Slide from '@/components/Slide'
import Slider from '@/components/Slider'
import React from 'react'

const Page = () => {

  const data = [
    {
      id: "1",
      title: "Random Anime 1",
      image: "https://img.freepik.com/premium-photo/fantasy-illustration-woman-dark-forest-wearing-black-cloak_1015980-578923.jpg?w=740",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde accusantium omnis qui praesentium! Corporis voluptatibus maxime dolores explicabo amet voluptatem."
    },
    {
      id: "2",
      title: "Random Anime 2",
      image: "https://img.freepik.com/free-photo/cyberpunk-city-street-night-with-neon-lights-futuristic-aesthetic_23-2151488739.jpg?t=st=1718944752~exp=1718948352~hmac=f4b011af411584acf17e1767b656fc23ce667dcf42c4073e3b1fa7882a81a38c&w=900",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde accusantium omnis qui praesentium! Corporis voluptatibus maxime dolores explicabo amet voluptatem."
    },
    {
      id: "3",
      title: "Random Anime 3",
      image: "https://img.freepik.com/free-photo/anime-style-character-space_23-2151134323.jpg?t=st=1718944795~exp=1718948395~hmac=8a8a26abf31dda92c474643b8c697eacae35d3e9745661bdb53758b7caa1b321&w=900",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde accusantium omnis qui praesentium! Corporis voluptatibus maxime dolores explicabo amet voluptatem."
    },
    {
      id: "4",
      title: "Random Anime 4",
      image: "https://img.freepik.com/free-photo/anime-japanese-character_23-2151478190.jpg?t=st=1718944817~exp=1718948417~hmac=11a603681128e5af018c60fadb311431b8100cc07ff7b160c58ebfb5e142ffa1&w=740",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde accusantium omnis qui praesentium! Corporis voluptatibus maxime dolores explicabo amet voluptatem."
    },
    {
      id: "1",
      title: "Random Anime 1",
      image: "https://img.freepik.com/premium-photo/fantasy-illustration-woman-dark-forest-wearing-black-cloak_1015980-578923.jpg?w=740",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde accusantium omnis qui praesentium! Corporis voluptatibus maxime dolores explicabo amet voluptatem."
    },
    {
      id: "2",
      title: "Random Anime 2",
      image: "https://img.freepik.com/free-photo/cyberpunk-city-street-night-with-neon-lights-futuristic-aesthetic_23-2151488739.jpg?t=st=1718944752~exp=1718948352~hmac=f4b011af411584acf17e1767b656fc23ce667dcf42c4073e3b1fa7882a81a38c&w=900",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde accusantium omnis qui praesentium! Corporis voluptatibus maxime dolores explicabo amet voluptatem."
    },
    {
      id: "3",
      title: "Random Anime 3",
      image: "https://img.freepik.com/free-photo/anime-style-character-space_23-2151134323.jpg?t=st=1718944795~exp=1718948395~hmac=8a8a26abf31dda92c474643b8c697eacae35d3e9745661bdb53758b7caa1b321&w=900",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde accusantium omnis qui praesentium! Corporis voluptatibus maxime dolores explicabo amet voluptatem."
    },
    {
      id: "4",
      title: "Random Anime 4",
      image: "https://img.freepik.com/free-photo/anime-japanese-character_23-2151478190.jpg?t=st=1718944817~exp=1718948417~hmac=11a603681128e5af018c60fadb311431b8100cc07ff7b160c58ebfb5e142ffa1&w=740",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde accusantium omnis qui praesentium! Corporis voluptatibus maxime dolores explicabo amet voluptatem."
    },
  ]

  return (
    <div>
      <Slider>
        <Slide cards={data} image='https://cm.blazefast.co/b2/ac/b2ac8cf1b764ef6f52eac4b8aa1eb48c.jpg'/>
        <Slide cards={data} image='https://img.freepik.com/free-photo/beautiful-bobcat-nature_23-2150700685.jpg?t=st=1718944183~exp=1718947783~hmac=26daef8b7410f33fd05087bd461d8ace9216e320cd73715b9d767d18b7b76ddd&w=1060'/>
        <Slide cards={data} image='https://img.freepik.com/free-photo/wild-wolf-nature_23-2151430239.jpg?t=st=1718944210~exp=1718947810~hmac=a85c05667671b78034155844c61c9d222d1675a1ad4fd87b44104df0ccfc246e&w=1060'/>
        <Slide cards={data} image='https://img.freepik.com/free-photo/view-leopard-animal-wild_23-2150374866.jpg?t=st=1718943491~exp=1718947091~hmac=10d191dc06a2457284c6d17b2711552bd40c5bf6ea609f7a932a7f8825774ca9&w=1060'/>
      </Slider>
    </div>
  )
}

export default Page
