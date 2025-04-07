const features = [
    { icon: "📱", text: "Social Networking Platform - Connects people worldwide through posts, photos, and videos." },
    { icon: "💬", text: "Messaging & Chat - Includes Messenger for real-time conversations and group chats." },
    { icon: "📰", text: "News Feed - Personalized stream of updates from friends, pages, and groups." },
    { icon: "📸", text: "Media Sharing - Upload and share photos, stories, and live videos easily." },
    { icon: "👥", text: "Groups & Communities - Join or create interest-based groups for discussions and events." },
    { icon: "📅", text: "Events - Create and manage events with RSVPs, reminders, and details." },
    { icon: "📈", text: "Marketplace & Ads - Buy/sell items locally and run targeted advertisements." },
    { icon: "🔒", text: "Privacy Controls - Customize who can see your posts and manage account security." }
  ];
  
  const featureSection = document.getElementById('features-section');
  const h1 = document.createElement('h1');
  h1.innerText = "WELCOME TO FACEBOOK";
  featureSection.appendChild(h1);
  
  const ul = document.createElement('ul');
  features.forEach(feature => {
    const li = document.createElement('li');
    li.innerText = `${feature.icon} ${feature.text}`;
    ul.appendChild(li);
  });
  featureSection.appendChild(ul);  
  
  fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')
  .then(response => response.json())
  .then(products => {
    const container = document.getElementById('marketplace');
    products.forEach(product => {
      const item = document.createElement('div');
      item.innerHTML = `
        <strong style="text-transform: uppercase;">${product.name}</strong><br>
        $${product.price.toFixed(2)}<br>
        ${product.type.toLowerCase()}
      `;
      container.appendChild(item);
    });
  })
  .catch(err => console.error('Error loading marketplace:', err));