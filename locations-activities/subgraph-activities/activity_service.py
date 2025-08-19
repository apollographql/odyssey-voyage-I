import json
from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import urlparse

# Sample in-memory data
activities = [
    {
        "id": "1",
        "name": "Moonlight Walk on Europa",
        "description": "A serene stroll under Jupiter's shadow",
        "price": 500,
        "locationId": "loc-1"
    },
    {
        "id": "2",
        "name": "Ocean Diving Adventure",
        "description": "Explore the depths of New Lemuria's living ocean",
        "price": 800,
        "locationId": "loc-1"
    },
    {
        "id": "3",
        "name": "Renaissance Art Tour",
        "description": "Guided tour through Vinci's artistic masterpieces",
        "price": 350,
        "locationId": "loc-2"
    },
    {
        "id": "5",
        "name": "Asteroid Mining Tour",
        "description": "Learn mining techniques on Asteroid B-612",
        "price": 900,
        "locationId": "loc-3"
    },
    {
        "id": "6",
        "name": "Little Prince Story Walk",
        "description": "Follow the footsteps of the Little Prince",
        "price": 200,
        "locationId": "loc-3"
    },
    {
        "id": "7",
        "name": "Mars Canyon Glider",
        "description": "Soar over Valles Marineris in a hover-glider",
        "price": 1200,
        "locationId": "loc-4"
    },
    {
        "id": "8",
        "name": "Kryptonian Crystal Cave Exploration",
        "description": "Discover the secrets of Krypton's crystal formations",
        "price": 2000,
        "locationId": "loc-4"
    },
    {
        "id": "11",
        "name": "Fortress of Solitude Tour",
        "description": "Explore Superman's legendary arctic fortress",
        "price": 1800,
        "locationId": "loc-4"
    },
    {
        "id": "9",
        "name": "Saturn Ring Surfing",
        "description": "Surf particle waves along Saturn's rings",
        "price": 2500,
        "locationId": "loc-5"
    },
    {
        "id": "10",
        "name": "Zenn-la Meditation Retreat",
        "description": "Find inner peace on the Silver Surfer's homeworld",
        "price": 1800,
        "locationId": "loc-5"
    }
]

class Handler(BaseHTTPRequestHandler):
    def _send_json(self, obj, status=200):
        data = json.dumps(obj).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(data)))
        self.end_headers()
        self.wfile.write(data)

    def do_GET(self):
        parsed = urlparse(self.path)
        path = parsed.path

        # GET /locations -> all activities
        if path == "/activities":
            self._send_json(activities)
            return

        # GET /activity/<id> -> single activity
        if path.startswith("/activity/"):
            activity_id = path.split("/")[-1]
            for act in activities:
                if act["id"] == activity_id:
                    self._send_json(act)
                    return
            # If not found
            self._send_json({"error": "Activity not found"}, status=404)
            return

        # GET /activities/location/<id> -> activities for location
        if path.startswith("/activities/location/"):
            location_id = path.split("/")[-1]
            location_activities = [act for act in activities if act["locationId"] == location_id]
            self._send_json(location_activities)
            return

        # Default 404
        self._send_json({"error": "Not found"}, status=404)


if __name__ == "__main__":
    server_address = ("localhost", 7777)
    print("Serving REST API at http://localhost:7777 ...")
    httpd = HTTPServer(server_address, Handler)
    httpd.serve_forever()

