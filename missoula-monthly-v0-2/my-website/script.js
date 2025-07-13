const events = [
    {
      title: "Farmers Market at Civic Center",
      date: "2025-07-13",
      time: "8:00 AM - 2:00 PM",
      location: "123 Main St, Townville",
      description: "Shop fresh produce, baked goods, and artisan crafts."
    },
    {
      title: "Outdoor Movie Night: The Goonies",
      date: "2025-07-14",
      time: "8:30 PM",
      location: "Sunset Park Amphitheater",
      description: "Bring blankets and enjoy a free movie under the stars!"
    },
    {
      title: "Jazz in the Park",
      date: "2025-07-16",
      time: "6:00 PM - 9:00 PM",
      location: "Riverwalk Stage",
      description: "Live jazz performances from local musicians."
    }
  ];
  
  const container = document.getElementById('events-container');
  
  events.forEach(event => {
    const div = document.createElement('div');
    div.className = 'event';
    div.innerHTML = `
      <h2>${event.title}</h2>
      <time>${event.date} — ${event.time}</time>
      <p><strong>Location:</strong> ${event.location}</p>
      <p>${event.description}</p>
    `;
    container.appendChild(div);
  });
  
  