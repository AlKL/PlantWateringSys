using System.ComponentModel.DataAnnotations;

namespace Plants.db
{
    public class Plant
    {
        [Key]
        public int Id { get; set; }
        public int WaterLevel { get; set; }
        public string lastWaterTime { get; set; }
    }
}
