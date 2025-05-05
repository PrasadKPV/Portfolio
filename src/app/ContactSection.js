const contacts = [
  {
    name: "GitHub",
    icon: "/icons/gith.png",
    url: "https://github.com/prasadkpv",
  },
  {
    name: "Email",
    icon: "/icons/gmail.png",
    url: "mailto:kpvprasad2000@gmail.com",
  },
  {
    name: "Instagram",
    icon: "/icons/insta.png",
    url: "https://instagram.com/yourprofile",
  },
  {
    name: "Facebook",
    icon: "/icons/book.png",
    url: "https://facebook.com/yourprofile",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="snap-start flex flex-col justify-center items-center min-h-[20vh] bg-[#1a1a1a] p-8"
    >
      <h2 className="text-4xl font-bold mb-6 text-white text-center">Contact</h2>
      <div className="flex flex-wrap justify-center gap-8 max-w-xs sm:max-w-md md:max-w-lg">
        {contacts.map((contact) => (
          <a
            key={contact.name}
            href={contact.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center cursor-pointer text-gray-900 hover:text-white"
          >
            <img src={contact.icon} alt={contact.name} className="w-10 h-10 mb-2" />
            <span className="text-sm">{contact.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
