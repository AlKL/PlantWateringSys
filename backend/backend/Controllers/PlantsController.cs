using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Plants.Core;
using Plants.db;

namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PlantsController : ControllerBase
    {
        private readonly ILogger<PlantsController> _logger;
        private IPlantsServices _plantsServices;

        public PlantsController(ILogger<PlantsController> logger, IPlantsServices plantsServices)
        {
            _logger = logger;
            _plantsServices = plantsServices;
        }

        public IActionResult GetPlants()
        {
            return Ok(_plantsServices.GetPlants());
        }

        [HttpGet("{id}", Name = "GetPlant")]
        public IActionResult GetPlant(int id)
        {
            return Ok(_plantsServices.GetPlant(id));
        }

        [HttpPost]
        public IActionResult CreatePlant(Plant plant)
        {
            var newPlant = _plantsServices.CreatePlant(plant);
            return CreatedAtRoute("GetPlant", new { newPlant.Id }, newPlant);
        }

        [HttpPut]
        public IActionResult UpdatePlant([FromBody] Plant plant)
        {
            _plantsServices.UpdatePlant(plant);
            return Ok();
        }

    }
}
