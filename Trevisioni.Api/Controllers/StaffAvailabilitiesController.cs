using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Trevisioni.Model;

namespace Trevisioni.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StaffAvailabilitiesController : ControllerBase
    {
        private readonly TrevisioniContext _context;

        public StaffAvailabilitiesController(TrevisioniContext context)
        {
            _context = context;
        }

        // GET: api/StaffAvailabilities
        [HttpGet]
        public async Task<ActionResult<IEnumerable<StaffAvailability>>> GetStaffAvailabilities()
        {
            return await _context.StaffAvailabilities.ToListAsync();
        }

        // GET: api/StaffAvailabilities/5
        [HttpGet("{id}")]
        public async Task<ActionResult<StaffAvailability>> GetStaffAvailability(string id)
        {
            var staffAvailability = await _context.StaffAvailabilities.FindAsync(id);

            if (staffAvailability == null)
            {
                return NotFound();
            }

            return staffAvailability;
        }

        // PUT: api/StaffAvailabilities/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStaffAvailability(string id, StaffAvailability staffAvailability)
        {
            if (id != staffAvailability.Id)
            {
                return BadRequest();
            }

            _context.Entry(staffAvailability).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StaffAvailabilityExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/StaffAvailabilities
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<StaffAvailability>> PostStaffAvailability(StaffAvailability staffAvailability)
        {
            _context.StaffAvailabilities.Add(staffAvailability);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (StaffAvailabilityExists(staffAvailability.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetStaffAvailability", new { id = staffAvailability.Id }, staffAvailability);
        }

        // DELETE: api/StaffAvailabilities/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStaffAvailability(string id)
        {
            var staffAvailability = await _context.StaffAvailabilities.FindAsync(id);
            if (staffAvailability == null)
            {
                return NotFound();
            }

            _context.StaffAvailabilities.Remove(staffAvailability);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool StaffAvailabilityExists(string id)
        {
            return _context.StaffAvailabilities.Any(e => e.Id == id);
        }
    }
}
