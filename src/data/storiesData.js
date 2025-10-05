const allStories = [
  // 🌾 FARMER STORIES
  {
    id: 1,
    title: "👨‍🌾 The Magical Seed",
    read: "One evening, under a soft silver moon, a humble farmer planted a tiny glowing seed he found near the riverbank. By morning, a tall tree with golden leaves shimmered under the sunlight. The tree whispered gentle songs that made the crops grow faster. Curious, the farmer listened carefully and learned that kindness helps everything bloom. From that day, he shared his harvest with everyone, and his farm never stopped shining.",
    animation: "Show the farmer planting a glowing seed that grows overnight into a golden tree spreading light across the farm.",
    funFact: "Some seeds can stay dormant for years before sprouting when the right conditions appear!"
  },
  {
    id: 2,
    title: "🌻 The Sunflower Orchestra",
    read: "Every morning, Farmer Lila noticed her sunflowers turning their heads toward the sunrise. When the wind blew, they swayed like an orchestra performing a cheerful tune. One day, she played her violin beside them, and the flowers seemed to dance in rhythm. It became a morning concert of nature and music. Soon, villagers joined, and the field became a place where hearts grew lighter with every note.",
    animation: "Animate sunflowers turning and dancing in harmony as the farmer plays a violin in the glowing dawn.",
    funFact: "Sunflowers track the sun’s movement during the day, a process called heliotropism!"
  },
  {
    id: 3,
    title: "🌦 The Rain Caller",
    read: "When drought hit the valley, the farmer built a shiny metal wind chime to call the rain. Every night, she hung it under the stars, hoping nature would hear. On the third night, clouds gathered, drawn by the melody of the chime. Raindrops finally fell, waking sleeping seeds and thirsty roots. The farmer danced in the rain, grateful for her friendship with the sky.",
    animation: "Show silver chimes ringing softly as dark clouds swirl and rain begins to fall over the fields.",
    funFact: "Rain forms when water vapor condenses into droplets that grow heavy enough to fall!"
  },
  {
    id: 4,
    title: "🐝 The Bee’s Promise",
    read: "A lonely farmer noticed fewer flowers blooming and fewer bees buzzing around her farm. She decided to plant bright wildflowers and build tiny homes for the bees. Weeks later, the garden became alive with golden hums and soft wings. One bee landed on her hand, as if to thank her. She smiled, knowing that small kindness can save entire worlds of color.",
    animation: "Show flowers blooming in waves as bees fill the sky, landing softly on the farmer’s hand.",
    funFact: "Bees pollinate 75% of the world’s flowering plants, helping food grow!"
  },
  {
    id: 5,
    title: "🌾 Whisper of the Wheat",
    read: "Late at night, the farmer walked through the whispering wheat field. The stalks swayed, sharing secrets about the wind and rain. They taught her how to listen to nature’s rhythm to know when to harvest. At dawn, golden light touched the field, and every ear of wheat bowed in gratitude. She realized farming was not just work—it was a conversation with the Earth.",
    animation: "Wheat glowing softly under moonlight as the farmer listens to their whispers.",
    funFact: "Wind direction can tell farmers when a crop is ready for harvest!"
  },

  // ⚙️ ENGINEER STORIES
  {
    id: 6,
    title: "⚙️ The Bridge of Light",
    read: "An engineer dreamed of connecting two villages separated by a deep valley. She built a bridge made of special glass that absorbed sunlight during the day and glowed at night. Children loved walking across it, pretending they were walking on starlight. The bridge became a symbol of hope and friendship, lighting the path for everyone who crossed.",
    animation: "Show a glowing glass bridge shining at night as villagers walk across smiling.",
    funFact: "Some real bridges use solar panels to store energy for night lighting!"
  },
  {
    id: 7,
    title: "🤖 The Gentle Robot",
    read: "Mia, a young engineer, built a robot that could help her pick apples and tell jokes. But one morning, it noticed a fallen bird and carefully placed it back in its nest. Mia realized her robot had learned compassion, not from code, but from watching her care for others. From that day, she didn’t just build machines—she built kindness into everything she created.",
    animation: "A robot gently placing a small bird into a nest as the engineer smiles proudly.",
    funFact: "AI and robots can learn patterns from human actions through observation!"
  },
  {
    id: 8,
    title: "🔋 Power from Wind",
    read: "In a windy coastal town, an engineer built colorful windmills to power every home. The blades spun like dancing ribbons, and for the first time, the stars reflected off bright windows at night. When asked why she chose colors, she smiled, 'Energy should make people happy, too.' Her invention turned wind into music and light into joy.",
    animation: "Windmills spinning under the sunset, sending glowing lines of energy to houses below.",
    funFact: "Wind turbines convert the wind’s motion into electricity!"
  },
  {
    id: 9,
    title: "💧 The Water Walker",
    read: "An engineer noticed a village struggling to cross a flooded stream. She invented special floating shoes that could walk on water! Kids laughed as they followed her across, balancing like tiny magicians. The invention made traveling safe, but also made people believe that solutions often begin with imagination.",
    animation: "Engineer and children walking happily across a calm river with floating shoes.",
    funFact: "Some insects, like water striders, walk on water thanks to surface tension!"
  },
  {
    id: 10,
    title: "🧲 The Magnetic Car",
    read: "A clever engineer built cars that floated using magnetic force instead of wheels. They zoomed silently, leaving no smoke behind. People called them ‘Sky Cars’ even though they stayed just above the road. The engineer proved that clean ideas could drive the world forward.",
    animation: "Cars levitating slightly above a road glowing with blue magnetic energy.",
    funFact: "Maglev trains use magnetic repulsion to float and move smoothly!"
  },

  // 🧒 KID STORIES
  {
    id: 11,
    title: "🪄 The Dream Pencil",
    read: "A curious kid found a pencil that glowed blue whenever she drew something kind. When she sketched a tree, a sapling grew outside her window. When she drew a smile, people around her laughed more easily. One night, she drew a rainbow, and by morning, the whole sky smiled back. She learned that imagination could color the real world.",
    animation: "Pencil glowing as drawn objects come to life around the child.",
    funFact: "Drawing helps the brain remember and understand better through visualization!"
  },
  {
    id: 12,
    title: "🎈 The Floating Backpack",
    read: "When Sam forgot his science project, his backpack suddenly floated out the window, guided by balloons! He chased it across the park, laughing as people cheered. Finally, it landed gently at school—on time. That day, he realized curiosity can lift you higher than fear ever could.",
    animation: "Colorful balloons carrying a backpack across the bright morning sky.",
    funFact: "Helium gas makes balloons float because it’s lighter than air!"
  },
  {
    id: 13,
    title: "💡 The Idea Jar",
    read: "Lila collected ideas like fireflies. Every time she had one, she whispered it into a glass jar. One night, the jars started glowing, lighting her room like a galaxy. She used the light to invent small things that helped her friends—a pencil that never broke, a backpack that could clean itself. Her tiny glowing ideas made a big world brighter.",
    animation: "Glowing jars floating around a child’s room as she builds creative inventions.",
    funFact: "Writing down ideas helps the brain store and recall creative thoughts!"
  },
  {
    id: 14,
    title: "🐸 The Frog’s Secret",
    read: "At a pond, a frog told a curious kid the secret of calm: 'Listen to the ripples, not the noise.' The kid tried it and felt peaceful for the first time. Every day after school, they sat by the pond, counting ripples and dreams. Nature had become their best teacher.",
    animation: "Frog croaking softly beside a calm pond reflecting sunset ripples.",
    funFact: "Frogs absorb water through their skin instead of drinking it!"
  },
  {
    id: 15,
    title: "🌈 Colors of the Rain",
    read: "During a storm, a young painter cried when her colors washed away. But as sunlight returned, she saw her art shining in the puddles—a rainbow formed right above it. She learned that even rainy days can bring color if you look closely enough.",
    animation: "Raindrops mixing colors into a rainbow glowing across the sky.",
    funFact: "Rainbows appear when light bends through raindrops, separating colors!"
  },

  // ✈️ PILOT STORIES
  {
    id: 16,
    title: "🛩 Sky of Wishes",
    read: "A pilot loved drawing messages in the sky with her jet’s smoke trail. She wrote words like 'Be Kind' and 'Dream Big.' One day, she saw children on the ground waving with chalk signs spelling 'Thank You.' She realized her skywriting wasn’t just art—it was connection.",
    animation: "Plane drawing glowing words across a pastel sky while kids wave below.",
    funFact: "Skywriting is done by releasing special vapor trails at high altitudes!"
  },
  {
    id: 17,
    title: "🌤 The Cloud Chaser",
    read: "A pilot followed a giant heart-shaped cloud across the sky. When it faded, she found herself above a storm, where sunlight painted the clouds gold. She realized chasing beauty often leads to discovery, not loss. That day, she promised to always fly where wonder led.",
    animation: "Plane weaving between clouds shaped like hearts and animals.",
    funFact: "Clouds form when warm air rises and cools, causing condensation!"
  },
  {
    id: 18,
    title: "🪂 The Parachute Promise",
    read: "A pilot helped children face their fear of heights by teaching them parachuting. When one kid hesitated, she said, 'The sky catches you if you trust it.' They jumped together, landing safely with laughter. Fear turned into courage, and courage became joy.",
    animation: "Kids parachuting from a plane with colorful chutes over a sunny valley.",
    funFact: "Parachutes slow falling speed using air resistance!"
  },
  {
    id: 19,
    title: "🦅 Flight with an Eagle",
    read: "While flying low over mountains, a pilot spotted an eagle flying beside her. For minutes, they soared together, wings and metal in rhythm. She realized machines might fly faster, but nature still flies freer. It was her favorite flight of all.",
    animation: "Eagle flying alongside a jet under golden light.",
    funFact: "Eagles can soar up to 10,000 feet high without flapping often!"
  },
  {
    id: 20,
    title: "🛰 Map of the Skies",
    read: "A young pilot invented a sky map that glowed when planes were nearby. It helped others find safe paths through fog and storms. Her invention made her a hero, but what she loved most was helping others see clearly even when clouds covered the way.",
    animation: "Pilot studying holographic glowing maps while flying through mist.",
    funFact: "Modern airplanes use satellite GPS systems to navigate!"
  },

  // 🚀 ASTRONAUT STORIES
  {
    id: 21,
    title: "🚀 The First Tree on Mars",
    read: "An astronaut planted a single seed on Mars as a symbol of hope. She sang to it every day while fixing solar panels. One morning, she found a tiny green sprout pushing through the red soil. It was proof that life finds a way—even in silence.",
    animation: "Astronaut kneeling beside a small glowing sprout on red Martian soil.",
    funFact: "NASA studies how plants grow in zero gravity for future space farming!"
  },
  {
    id: 22,
    title: "🪐 The Rings of Saturn",
    read: "A group of astronauts danced weightlessly near Saturn’s rings, laughing as tiny ice crystals sparkled like diamonds. They learned that beauty in space isn’t rare—it’s constant. They sent photos back to Earth so children could see the dance of the universe.",
    animation: "Astronauts floating around Saturn’s shimmering rings.",
    funFact: "Saturn’s rings are made mostly of ice and rock particles!"
  },
  {
    id: 23,
    title: "🌕 The Moon Library",
    read: "On the Moon, an astronaut built a small library filled with stories from Earth. She believed the stars should hear our tales too. When she read aloud, her voice echoed softly across the lunar plains, like a lullaby to space.",
    animation: "Books floating in low gravity inside a moon dome with soft lights.",
    funFact: "Sound cannot travel in space because there is no air!"
  },
  {
    id: 24,
    title: "🌠 The Shooting Star Friend",
    read: "An astronaut saw a shooting star every night near her station. One day, it changed direction and followed her ship home. She realized that friendship can shine across light years, even if you can’t touch it.",
    animation: "A glowing comet guiding a spaceship through the cosmos.",
    funFact: "A shooting star is actually a meteor burning as it enters Earth’s atmosphere!"
  },
  {
    id: 25,
    title: "👽 The Cosmic Message",
    read: "While exploring a distant nebula, an astronaut found glowing letters forming in space. They said, 'You are never alone.' She smiled and recorded the lights, sending them back to Earth. When people saw it, the message spread hope across the world.",
    animation: "Spaceship surrounded by glowing alien symbols turning into constellations.",
    funFact: "Light from some stars takes millions of years to reach Earth!"
  }
];

export default allStories;
