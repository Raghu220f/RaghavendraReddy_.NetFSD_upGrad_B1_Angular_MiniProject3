using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace PatientService.Data
{
    public class PatientDbContextFactory : IDesignTimeDbContextFactory<PatientDbContext>
    {
        public PatientDbContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<PatientDbContext>();

            optionsBuilder.UseSqlServer(
                "Server=Raghu\\SQLEXPRESS;Database=PatientDB;Trusted_Connection=True;TrustServerCertificate=True"
            );

            return new PatientDbContext(optionsBuilder.Options);
        }
    }
}
