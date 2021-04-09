using System.ComponentModel.DataAnnotations;

namespace Plants.db
{
    public class Plant
    {
        [Key]
        public int Id { get; set; }
        public string Value { get; set; }
    }
}