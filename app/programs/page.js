"use client"

import { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ProgramsPage() {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [selectedDegree, setSelectedDegree] = useState("all");

  useEffect(() => {
    fetchPrograms();
  }, [searchQuery, selectedCountry, selectedDegree]);

  const fetchPrograms = async () => {
    try {
      setLoading(true);
      console.log('Fetching programs with params:', {
        query: searchQuery,
        country: selectedCountry,
        degree: selectedDegree
      });

      const params = new URLSearchParams();
      if (searchQuery) params.append('query', searchQuery);
      if (selectedCountry !== "all") params.append('country', selectedCountry);
      if (selectedDegree !== "all") params.append('degree', selectedDegree);

      const response = await fetch(`/api/program?${params.toString()}`);
      console.log('API Response status:', response.status);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch programs: ${response.status}`);
      }

      const data = await response.json();
      console.log('Received programs:', data);

      if (Array.isArray(data)) {
        setPrograms(data);
        setError(null);
      } else {
        console.error('Invalid data format received:', data);
        throw new Error('Invalid data format received from API');
      }
    } catch (error) {
      console.error('Error fetching programs:', error);
      setError(error.message || 'Failed to load programs. Please try again later.');
      toast.error("Failed to fetch programs");
    } finally {
      setLoading(false);
    }
  };

  const handleViewDetails = (id) => {
    window.location.href = `/programs/${id}`;
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Study Programs</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1">
          <Input
            placeholder="Search programs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
        </div>
        <Select value={selectedCountry} onValueChange={setSelectedCountry}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Countries</SelectItem>
            <SelectItem value="USA">United States</SelectItem>
            <SelectItem value="UK">United Kingdom</SelectItem>
            <SelectItem value="Canada">Canada</SelectItem>
            <SelectItem value="Australia">Australia</SelectItem>
          </SelectContent>
        </Select>
        <Select value={selectedDegree} onValueChange={setSelectedDegree}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Degree" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Degrees</SelectItem>
            <SelectItem value="Bachelor">Bachelor</SelectItem>
            <SelectItem value="Master">Master</SelectItem>
            <SelectItem value="PhD">PhD</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <div className="animate-pulse space-y-4">
            {[1, 2, 3].map((n) => (
              <Card key={n} className="p-6">
                <div className="h-6 bg-muted rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-muted rounded w-1/2 mb-2"></div>
                <div className="h-4 bg-muted rounded w-1/4"></div>
              </Card>
            ))}
          </div>
        </div>
      ) : error ? (
        <div className="text-center py-12">
          <p className="text-destructive">{error}</p>
          <Button onClick={fetchPrograms} className="mt-4">Retry</Button>
        </div>
      ) : programs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <Card key={program._id} className="p-6">
              <h3 className="text-xl font-semibold mb-2">{program.name}</h3>
              <p className="text-muted-foreground mb-4">{program.university}</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">
                  {program.degree}
                </span>
                <span className="text-sm text-muted-foreground">
                  {program.country}
                </span>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Building2 className="h-4 w-4" />
                  <span>{program.university}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{program.country}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{program.duration}</span>
                </div>
              </div>
              <Button onClick={() => handleViewDetails(program._id)} className="w-full">
                View Details
              </Button>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl font-semibold mb-2">No programs found</p>
          <p className="text-muted-foreground">
            Try adjusting your search criteria or filters
          </p>
        </div>
      )}
    </div>
  );
}