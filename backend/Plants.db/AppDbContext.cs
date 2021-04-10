using Microsoft.EntityFrameworkCore;

namespace Plants.db
{
    public class AppDbContext : DbContext
    {
            public DbSet<Plant> Plants { get; set; }

            protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            {
                optionsBuilder.UseSqlServer(
                    @"Server=(localdb)\mssqllocaldb;Database=Plants;Integrated Security=True");
            }
        
    }
}
