using System.ComponentModel.DataAnnotations;

namespace Plants.db
{
    public class Plant
    {
        [Key]
        public int Id { get; set; }
        public int WaterLevel { get; set; }
        public int hoursSinceWatered { get; set; }
    }
}
