using Plants.db;
using System.Collections.Generic;

namespace Plants.Core
{
    public interface IPlantsServices
    {
        Plant CreatePlant(Plant plant);
        Plant GetPlant(int id);
        List<Plant> GetPlants();
        void UpdatePlant(Plant plant);
    }
    

}
