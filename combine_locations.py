#!/usr/bin/env python3
import json

# Read all provider files
with open('frontend/public/api/locations/equinix.json', 'r') as f:
    equinix = json.load(f)

with open('frontend/public/api/locations/megaport.json', 'r') as f:
    megaport = json.load(f)

with open('frontend/public/api/locations/1111systems.json', 'r') as f:
    systems1111 = json.load(f)

# Combine all locations
all_locations = equinix + megaport + systems1111

print(f"Total locations: {len(all_locations)}")
print(f"Equinix: {len(equinix)}")
print(f"Megaport: {len(megaport)}")
print(f"11:11 Systems: {len(systems1111)}")

# Write combined file
with open('frontend/public/api/locations.json', 'w') as f:
    json.dump(all_locations, f, indent=2)

print(f"✅ Created comprehensive locations.json with {len(all_locations)} locations")