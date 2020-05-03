using DatingApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Data
{
    public class DataContext :  DbContext // .net wala extend karanne : deken
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options) {}

        public DbSet<Value> Values{ get; set; }

        public DbSet<User> Users{ get; set; }
       
    }
}