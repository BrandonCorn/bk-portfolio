/**
 * Element for each blog post
 */
const PostModal = ({
  title,
  content,
  createdAt,
}: {
  title: string;
  content: string;
  createdAt: Date;
}) => {
  const test = `Nature is an incredible force that surrounds us every day, yet many of us fail to truly appreciate its beauty and importance. From the majestic mountains to the vast oceans, nature provides us with awe-inspiring landscapes and habitats for countless species of plants and animals. In this blog post, we'll explore some of the wonders of nature and why it's essential to protect and preserve our natural world.

  One of the most breathtaking sights in nature is a waterfall. The sheer power and beauty of water cascading over rocks create a mesmerizing spectacle that captivates the imagination. Whether it's a towering waterfall like Niagara Falls or a hidden gem tucked away in a remote forest, each waterfall has its unique charm and allure. Standing near a waterfall, feeling the mist on your face, and hearing the roar of the water can evoke a sense of wonder and awe at the sheer power of nature.
  
  Another marvel of nature is the diversity of plant and animal life found in different ecosystems around the world. From the lush rainforests of the Amazon to the frozen tundra of the Arctic, each ecosystem is home to a unique array of species adapted to its particular climate and conditions. The intricate web of life that connects plants, animals, and microorganisms ensures the health and balance of ecosystems and provides essential services like pollination, air purification, and soil fertility.
  
  Beyond its aesthetic beauty, nature also provides numerous benefits to human health and well-being. Spending time outdoors, surrounded by greenery and fresh air, has been shown to reduce stress, improve mood, and boost cognitive function. Activities like hiking, camping, and birdwatching allow us to connect with nature on a personal level and gain a deeper appreciation for the world around us.
  
  Despite its many wonders, nature faces numerous threats from human activities like deforestation, pollution, and climate change. It's crucial that we take steps to protect and preserve our natural world for future generations to enjoy. By supporting conservation efforts, reducing our carbon footprint, and advocating for environmental policies, we can ensure that the wonders of nature continue to inspire and amaze us for years to come.`;
  return (
    <div className="bg-white shadow-lg rounded-lg w-full mx-auto mb-8">
      <div className="px-4 py-2">
        <h2 className="my-4 h-6 text-2xl font-bold text-gray-800">{title}</h2>
        <p className="my-4 h-4 text-gray-600 text-sm">
          published: {new Date(createdAt).toLocaleDateString()}
        </p>
      </div>
      <article className="px-4 py-2 text-wrap">
        <p className=" text-gray-700 text-md">{test}</p>
      </article>
    </div>
  );
};

export default PostModal;
