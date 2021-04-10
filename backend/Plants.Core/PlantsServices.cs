using Plants.db;
using System.Collections.Generic;
using System.Linq;

namespace Plants.Core
{
    public class PlantsServices : IPlantsServices
    {
        private AppDbContext _context;

        public PlantsServices(AppDbContext context)
        {
            _context = context;
        }

        public Plant CreatePlant(Plant plant)
        {
            _context.Add(plant);
            _context.SaveChanges();

            return plant;
        }

        public Plant GetPlant(int id)
        {
            return _context.Plants.First(n => n.Id == id);
        }

        public List<Plant> GetPlants()
        {
            return _context.Plants.ToList();
        }

        public void UpdatePlant(Plant plant)
        {
            var updatedPlant = _context.Plants.First(n => n.Id == plant.Id);
            updatedPlant.WaterLevel = plant.WaterLevel;
            updatedPlant.lastWaterTime = plant.lastWaterTime;
            _context.SaveChanges();
        }
    }

}
