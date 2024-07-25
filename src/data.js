import rake from "./assets/rake.jpg"
import water from "./assets/hand-water.jpg"
import tools from "./assets/tools.jpg"
import sand from "./assets/sand.jpg"
import planting from "./assets/planting.jpg"
import shovel from "./assets/land.jpg"




export const section_one = {
    id: 1,
    title: "Gardening Techniques and Tips",
    description: " Discover a wealth of knowledge with our comprehensive guides and expert advice. Whether you're a beginner or a seasoned gardener, our tips and techniques will help you cultivate a thriving garden in any space.",
    plants : [
      {
          id: 1,
          image: rake,
          title: "Detailed Articles and Guides",
          description: "Explore in-depth articles on various gardening techniques, from soil preparation to advanced pruning methods."
      },

      {
          id: 2,
          image: water,
          title: "Tips for Better Gardening Practices",
          description: "Learn effective practices tailored specifically for small-scale gardens, ensuring your plants thrive in limited spaces."
      },
    ]
}

export const section_two = {
    id: 2,
    title: "Essential Gardening Tools",
    hasBg: true,
    description: "Equip yourself with the right tools for successful gardening. Our comprehensive list and practical demonstrations will guide you in selecting and using the best tools for your garden.",
    plants : [
      {
          id: 1,
          image: tools,
          title: "Tools List",
          description: "Discover a curated list of essential gardening tools, complete with descriptions and usage instructions."
      },

      {
          id: 2,
          image: sand,
          title: "Sample Videos",
          description: "Watch short, informative videos demonstrating the use of various gardening tools to enhance your gardening experience."
      },
    ]
}

export const section_three = {
    id: 3,
    title: "Gardening Essentials",
    hasBg: false,
    description: "Understand the foundational elements of gardening with our detailed information on soil, fertilizers, pesticides, and seeds. Learn how to create a healthy environment for your plants to flourish.",
    plants : [
      {
          id: 1,
          image: shovel,
          title: "Soil, Fertilizers and Pesticides",
          description: "Get insights into different types of soil, fertilizers, and pesticides, and find out which are best suited for your small garden."
      },

      {
          id: 2,
          image: planting,
          title: " Seeds Details",
          description: "Find detailed information about various seeds, including planting seasons and care instructions."
      },
    ]
}