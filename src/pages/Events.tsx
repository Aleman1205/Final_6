import React from 'react';
import { Calendar, MapPin, Clock, Users, ExternalLink } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  attendees: number;
  imageUrl: string;
}

const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "Summer Gaming Championship",
    date: "2025-07-15",
    time: "10:00 AM PST",
    location: "Los Angeles Convention Center",
    description: "Join us for the biggest gaming tournament of the summer! Compete in multiple game categories and win amazing prizes.",
    attendees: 5000,
    imageUrl: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg"
  },
  {
    id: 2,
    title: "Game Developer Workshop",
    date: "2025-08-20",
    time: "2:00 PM PST",
    location: "San Francisco Gaming Hub",
    description: "Learn from industry experts about game development, design, and the future of gaming technology.",
    attendees: 1000,
    imageUrl: "https://images.pexels.com/photos/7915579/pexels-photo-7915579.jpeg"
  },
  {
    id: 3,
    title: "Virtual Reality Expo",
    date: "2025-09-10",
    time: "11:00 AM PST",
    location: "Seattle Gaming Center",
    description: "Experience the latest in VR gaming technology and get hands-on with upcoming VR titles.",
    attendees: 2500,
    imageUrl: "https://images.pexels.com/photos/8728560/pexels-photo-8728560.jpeg"
  }
];

const Events: React.FC = () => {
  return (
    <div className="pt-20">
      <Container>
        <div className="py-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Upcoming Events
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
            Join us at our exciting gaming events and connect with the community!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {event.title}
                  </h3>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <MapPin className="w-5 h-5 mr-2" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Users className="w-5 h-5 mr-2" />
                      <span>{event.attendees.toLocaleString()} Attendees</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {event.description}
                  </p>
                  <Button className="w-full flex items-center justify-center">
                    Register Now
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Events;