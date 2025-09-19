import sys, pygame
from road import draw_road
from traffic_light import TrafficLight
import random
import threading
from vehicles import *
from variables import *
from time import sleep, time
import math
import pickle

pygame.init()

speed = [0, 0]
black = 0, 0, 0

screen = pygame.display.set_mode(size)

ball = pygame.image.load("img.jpg")
# ball =
pygame.draw.rect(screen, pygame.Color(255, 0, 0), (0, 10, 10, 10))

ballrect = ball.get_rect()

traffic_lights = [
    TrafficLight(HEIGHT / 2 - ROAD_WIDTH / 2 * 1.4,
                 WIDTH / 2 - ROAD_WIDTH / 2 * 1.4, 'L','red'),
    TrafficLight(HEIGHT / 2 - ROAD_WIDTH / 2 * 1.4,
                 WIDTH / 2 + ROAD_WIDTH / 2 * 1.4, 'B','red'),
    TrafficLight(HEIGHT / 2 + ROAD_WIDTH / 2 * 1.4,
                 WIDTH / 2 + ROAD_WIDTH / 2 * 1.4, 'R','red'),
    TrafficLight(HEIGHT / 2 + ROAD_WIDTH / 2 * 1.4,
                 WIDTH / 2 - ROAD_WIDTH / 2 * 1.4, 'T','red'),
]

vehicles_list100 = []
# for i in range(200):
#     lane = Lane(random.randint(1, 2))
#     direction = Direction(random.randint(1, 4))
#     lst = list(range(1, 5))
#     del lst[direction.value - 1]
#     dest_direction = Direction(random.choice(lst))
#     vehicle = Vehicle(0.17, ROAD_WIDTH / 6, ROAD_WIDTH / 6, lane, direction, dest_direction)
#     vehicles_list100.append(vehicle)

# with open("data.dat","wb") as f:
#     pickle.dump(vehicles_list100,f)

with open('data.dat',"rb") as f:
    vehicles_list99 = pickle.load(f)

# print(vehicles_list99)

# v1 = Vehicle(0.1, ROAD_WIDTH / 6, ROAD_WIDTH / 6, Lane.left, Direction.left, 
#              Direction.left)
# v2 = Vehicle(0.1, ROAD_WIDTH / 6, ROAD_WIDTH / 6, Lane.right, Direction.left,
#              Direction.right)
# v3 = Vehicle(0.1, ROAD_WIDTH / 6, ROAD_WIDTH / 6, Lane.left, Direction.right,
#              Direction.right)
# v4 = Vehicle(0.1, ROAD_WIDTH / 6, ROAD_WIDTH / 6, Lane.right, Direction.right,
#              Direction.up)
# v5 = Vehicle(0.1, ROAD_WIDTH / 6, ROAD_WIDTH / 6, Lane.left, Direction.up,
#              Direction.up)
# v6 = Vehicle(0.1, ROAD_WIDTH / 6, ROAD_WIDTH / 6, Lane.right, Direction.up,
#              Direction.down)
# v7 = Vehicle(0.1, ROAD_WIDTH / 6, ROAD_WIDTH / 6, Lane.left, Direction.down,
#              Direction.down)
# v8 = Vehicle(0.1, ROAD_WIDTH / 6, ROAD_WIDTH / 6, Lane.right, Direction.down,
#              Direction.right)
vehicles_stopped = {
    Direction.left : [],
    Direction.down : [],
    Direction.right : [],
    Direction.up : [],
}
vehicles = []
vehicles_dict = {
    Direction.left: {
        # Direction.right: [],
        # Direction.up: [],
        # Direction.down: []
        Lane.left: [],
        Lane.right: []
    },
    Direction.down: {
        # Direction.left: [],
        # Direction.right: [],
        # Direction.up: []
        Lane.left: [],
        Lane.right: []
    },
    Direction.right: {
        # Direction.left: [],
        # Direction.up: [],
        # Direction.down: []
        Lane.left: [],
        Lane.right: []
    },
    Direction.up: {
        # Direction.left: [],
        # Direction.right: [],
        # Direction.down: []
        Lane.left: [],
        Lane.right: []
    },
}

def find_associate_light(vehicle):
    if vehicle.direction == Direction.left:
        return traffic_lights[0]
    elif vehicle.direction == Direction.down:
        return traffic_lights[1]
    elif vehicle.direction == Direction.right:
        return traffic_lights[2]
    return traffic_lights[3]

generate_completed = False
def generate_vehicle():
    # while True: 
        # lane = Lane(random.randint(1, 2))
        # direction = Direction(random.randint(1, 4))
        # lst = list(range(1, 5))
        # del lst[direction.value - 1]
        # dest_direciton = Direction(random.choice(lst))
        # vehicle = Vehicle(0.17, ROAD_WIDTH / 6, ROAD_WIDTH / 6, lane, direction, dest_direciton)
        # vehicles.append(vehicle)
    for vehicle in vehicles_list99:
        vehicles_dict[vehicle.direction][vehicle.lane].append(vehicle)
        vehicles.append(vehicle)
        # print(vehicles_dict)
        sleep(0.5)
    global generate_completed
    generate_completed = True

def initialize_lights(indexs):
    while True:
        if indexs == 10:
            for index, traffic in enumerate(traffic_lights):
                # print(traffic)
                traffic.changeLights(index)
        else:
            traffic_lights[indexs].changeLights(indexs)


traffic_light_thread = threading.Thread(name="initialization", target=initialize_lights, args=(10,))
traffic_light_thread.daemon = True
traffic_light_thread.start()

def lightsChange1():
    traffic_light_thread1 = threading.Thread(name="initialization1", target=initialize_lights, args=(0,))
    traffic_light_thread1.daemon = True
    traffic_light_thread1.start()

    traffic_light_thread2 = threading.Thread(name="initialization2", target=initialize_lights, args=(1,))
    traffic_light_thread2.daemon = True
    traffic_light_thread2.start()

    traffic_light_thread3 = threading.Thread(name="initialization3", target=initialize_lights, args=(2,))
    traffic_light_thread3.daemon = True
    traffic_light_thread3.start()

    traffic_light_thread4 = threading.Thread(name="initialization4", target=initialize_lights, args=(3,))
    traffic_light_thread4.daemon = True
    traffic_light_thread4.start()

traffic_lights[1].change_green_light_time(3)

def get_greenlight_time(no_of_vehicles, total_vehicles):
    # Base minimum time for any direction
    base_time = 3
    max_time = 8  # Maximum green time
    
    if no_of_vehicles == 0:
        return base_time  # Still give some time even if no vehicles
    
    # Calculate relative traffic density
    if total_vehicles == 0:
        return base_time
    
    density_ratio = no_of_vehicles / total_vehicles
    
    # More balanced approach - don't give too much time to any single direction
    if density_ratio > 0.6:  # If this direction has >60% of traffic
        time = base_time + (no_of_vehicles - 1) * 0.1  # Reduced multiplier
    elif density_ratio > 0.4:  # If this direction has 40-60% of traffic
        time = base_time + (no_of_vehicles - 1) * 0.08
    else:  # Light traffic
        time = base_time + (no_of_vehicles - 1) * 0.05
    
    return min(time, max_time)  # Cap the maximum time

def get_yellowlight_time(no_of_vehicles):
    time = 1.5
    if no_of_vehicles == 0:
        return 1.0  # Minimum yellow time for safety
    elif no_of_vehicles == 1:
        return time
    else:
        time += float(no_of_vehicles-1)*0.1
    return time

def calculate_balanced_timing(vehicles_stopped):
    """
    Simple priority-based queue balancing:
    - If lane A > lane B, give A green until A >= B (but not cleared)
    - Always maintain queue balance across all lanes
    - Never completely clear any lane
    """
    directions = list(vehicles_stopped.keys())
    vehicle_counts = [len(vehicles_stopped[direction]) for direction in directions]
    
    # Constants
    MIN_GREEN_TIME = 2.0    # Minimum green for any direction
    BASE_GREEN_TIME = 3.0   # Standard green time
    MAX_GREEN_TIME = 6.0    # Maximum to prevent monopolizing
    VEHICLES_PER_SECOND = 2.0  # Approximate vehicles cleared per second
    
    # Find the average queue length (target balance point)
    total_vehicles = sum(vehicle_counts)
    avg_queue_length = total_vehicles / 4 if total_vehicles > 0 else 0
    
    timing = []
    
    for i, count in enumerate(vehicle_counts):
        if count == 0:
            # Empty lane gets minimum time
            timing.append(MIN_GREEN_TIME)
        elif count > avg_queue_length + 1:  # Lane is above average
            # Calculate how many vehicles to clear to reach average
            vehicles_to_clear = count - avg_queue_length
            # But never clear more than half the queue (to prevent full clearing)
            vehicles_to_clear = min(vehicles_to_clear, count * 0.5)
            # Calculate time needed
            time_needed = vehicles_to_clear / VEHICLES_PER_SECOND
            # Apply constraints
            time_needed = max(MIN_GREEN_TIME, min(time_needed, MAX_GREEN_TIME))
            timing.append(time_needed)
        else:
            # Lane is at or below average - give base time
            timing.append(BASE_GREEN_TIME)
    
    # Priority adjustment: Give more time to the highest queue
    max_count = max(vehicle_counts)
    max_index = vehicle_counts.index(max_count)
    
    # Only apply priority if there's significant imbalance
    if max_count > 0:
        second_highest = sorted(vehicle_counts)[-2] if len(set(vehicle_counts)) > 1 else 0
        
        # If the highest lane has significantly more vehicles than second highest
        if max_count > second_highest + 2:
            # Give it enough time to bring it down to just above second highest
            vehicles_to_clear = (max_count - second_highest) * 0.7  # Clear 70% of the difference
            time_for_priority = vehicles_to_clear / VEHICLES_PER_SECOND
            time_for_priority = max(BASE_GREEN_TIME, min(time_for_priority, MAX_GREEN_TIME))
            timing[max_index] = time_for_priority
            
            # Slightly reduce time for lanes that are already low
            for i in range(4):
                if i != max_index and vehicle_counts[i] < avg_queue_length:
                    timing[i] = MIN_GREEN_TIME
    
    # Round all timings
    timing = [round(t, 1) for t in timing]
    
    # Debug output for monitoring
    if total_vehicles > 0 and pygame.time.get_ticks() % 500 == 0:
        print(f"Queue Balance - Counts: {vehicle_counts}, Avg: {avg_queue_length:.1f}")
        print(f"Timing Decision: {timing}")
    
    return timing

# lightsChange1()

# def lightsChange2():
#     traffic_light_thread1 = threading.Thread(name="initialization1", target=initialize_lights, args=(0,))
#     traffic_light_thread1.daemon = True
#     traffic_light_thread1.start()

#     traffic_light_thread2 = threading.Thread(name="initialization2", target=initialize_lights, args=(1,))
#     traffic_light_thread2.daemon = True
#     traffic_light_thread2.start()

#     traffic_light_thread3 = threading.Thread(name="initialization3", target=initialize_lights, args=(2,))
#     traffic_light_thread3.daemon = True
#     traffic_light_thread3.start()

#     traffic_light_thread4 = threading.Thread(name="initialization4", target=initialize_lights, args=(3,))
#     traffic_light_thread4.daemon = True
#     traffic_light_thread4.start()




# lightsChange2()
def truncate(number, decimals=0):
    """
    Returns a value truncated to a specific number of decimal places.
    """
    if not isinstance(decimals, int):
        raise TypeError("decimal places must be an integer.")
    elif decimals < 0:
        raise ValueError("decimal places has to be 0 or more.")
    elif decimals == 0:
        return math.trunc(number)

    factor = 10.0 ** decimals
    return math.trunc(number * factor) / factor

generate_vehicle_thread = threading.Thread(name="Initialization", target=generate_vehicle, args=())
generate_vehicle_thread.daemon = True
generate_vehicle_thread.start()

start_time = time()
pygame.font.get_init()
font = pygame.font.SysFont('freesanbold.ttf', 30)

top_left = pygame.transform.scale(pygame.image.load('images/top_left.jpg'), ( WIDTH/2 - ROAD_WIDTH / 2 - 5, HEIGHT/2 - ROAD_WIDTH/2-5))
top_right = pygame.transform.scale(pygame.image.load('images/top_right.jpg'), ( WIDTH/2 - ROAD_WIDTH / 2 - 5, HEIGHT/2 - ROAD_WIDTH/2-5))
bottom_left = pygame.transform.scale(pygame.image.load('images/bottom_left.jpg'), ( WIDTH/2 - ROAD_WIDTH / 2 - 5, HEIGHT/2 - ROAD_WIDTH/2-5))
bottom_right = pygame.transform.scale(pygame.image.load('images/bottom_right.jpg'), ( WIDTH/2 - ROAD_WIDTH / 2 - 5, HEIGHT/2 - ROAD_WIDTH/2-5))

while 1:
    pygame.draw.rect(screen, pygame.Color(255, 0, 0), (0, 10, 10, 10))

    for event in pygame.event.get():

        if event.type == pygame.QUIT: sys.exit()

    # ballrect = ballrect.move(speed)


    screen.fill('brown')

    
    # print(vehicles_stopped[list(vehicles_stopped.keys())[0]])
    
    # print(f'left light status: {traffic_lights[0].get_status()}')
    # print(f'right light status: {traffic_lights[1].get_status()}')
    # print(f'top light status: {traffic_lights[2].get_status()}')
    # print(f'bottom light status: {traffic_lights[3].get_status()}')

    draw_road(screen, WIDTH, HEIGHT, ROAD_WIDTH)
    txt = font.render("Adaptive Chowk", True, (255, 255, 255))
    txt_rect = txt.get_rect()
    txt_rect.center = (WIDTH_CENTRE, HEIGHT_CENTRE) 
    screen.blit(txt, txt_rect)
    
    # houses
    screen.blit(top_left, (0, 0))
    screen.blit(top_right, (WIDTH/2+ROAD_WIDTH/2+5, 0))
    screen.blit(bottom_left, (0, HEIGHT/2+ROAD_WIDTH/2+5))
    screen.blit(bottom_right, (WIDTH/2+ROAD_WIDTH/2+5, HEIGHT/2+ROAD_WIDTH/2+5))
    
    # traffic lights
    for i, traffic in enumerate(traffic_lights):
        count = len(vehicles_stopped[list(vehicles_stopped.keys())[i]])
        traffic.draw(screen, count)
    # v1.draw(screen)
    # v2.draw(screen)
    # v3.draw(screen)
    # v4.draw(screen)
    # v5.draw(screen)
    # v6.draw(screen)
    # v7.draw(screen)
    # v8.draw(screen)
    temp_vechiles = vehicles

    for vehicle in vehicles:
        vehicle.draw(screen)
        light = find_associate_light(vehicle)
        isMoving = vehicle.move(vehicles_dict, light)
        if not isMoving:
            if vehicle not in vehicles_stopped[vehicle.direction]:
                vehicles_stopped[vehicle.direction].append(vehicle)
        else:
            if vehicle in vehicles_stopped[vehicle.direction]: vehicles_stopped[vehicle.direction].remove(vehicle)

        if vehicle.pos[0] <= - 40 or vehicle.pos[0] >= WIDTH + 40 or vehicle.pos[1] <= -40 or vehicle.pos[1] >= WIDTH + 40:
            temp_vechiles.remove(vehicle)
            vehicles_dict[vehicle.direction][vehicle.lane].remove(vehicle)

    vehicles = temp_vechiles
    
    # Use balanced timing approach for more realistic AI behavior
    balanced_timing = calculate_balanced_timing(vehicles_stopped)
    
    # Log traffic state for monitoring (every 100 frames)
    if pygame.time.get_ticks() % 100 == 0:
        vehicle_counts = [len(vehicles_stopped[d]) for d in vehicles_stopped]
        if sum(vehicle_counts) > 0:  # Only log when there's traffic
            print(f"Traffic State - L:{vehicle_counts[0]} D:{vehicle_counts[1]} R:{vehicle_counts[2]} U:{vehicle_counts[3]}")
            print(f"Green Times  - L:{balanced_timing[0]:.1f}s D:{balanced_timing[1]:.1f}s R:{balanced_timing[2]:.1f}s U:{balanced_timing[3]:.1f}s")
            
            # Check if any lane is getting too full
            for i, count in enumerate(vehicle_counts):
                if count >= 8:
                    print(f"⚠️  CRITICAL: Direction {list(vehicles_stopped.keys())[i]} has {count} vehicles waiting!")
    
    for i, light in enumerate(traffic_lights):
        no_of_vehicles = len(vehicles_stopped[list(vehicles_stopped.keys())[i]])
        greentime = balanced_timing[i]  # Use balanced timing instead of individual calculation
        light.change_green_light_time(greentime)
        yellowtime = get_yellowlight_time(no_of_vehicles)
    
    if generate_completed == True and len(vehicles) == 0: 
        print('Simulation Complete')
        print(f'Simulation Time: {(time() - start_time)/60} min')
        sys.exit(0)
        # print(greentime)
        # light.change_yelow_light_time(yellowtime)

    # v1.move()
    # v2.move()
    # v3.move()
    # v4.move()
    # v5.move()
    # v6.move()
    # v7.move()
    # v8.move()
    end_time = time()

    time_lapsed = truncate(end_time - start_time, 2)

    txt = font.render("Time Elapsed: ", True, (0, 0, 0), (255, 255, 255))
    txt_rect = txt.get_rect()
    txt_rect.center = (72, 20) 
    screen.blit(txt, txt_rect)

    txt = font.render(str(time_lapsed), True, (0, 0, 0), (255, 255, 255))
    txt_rect = txt.get_rect()
    txt_rect.center = (162, 20) 
    screen.blit(txt, txt_rect)

    pygame.display.flip()
