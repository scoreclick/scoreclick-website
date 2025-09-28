import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('q') || ''
    const state = searchParams.get('state') || ''
    const city = searchParams.get('city') || ''

    const clubs = await prisma.club.findMany({
      where: {
        active: true,
        AND: [
          // Filtro por state se fornecido
          state ? { state: { contains: state, mode: 'insensitive' } } : {},
          // Filtro por city se fornecido
          city ? { city: { contains: city, mode: 'insensitive' } } : {},
          // Busca mútua por name ou subdomain se query fornecida
          query ? {
            OR: [
              { name: { contains: query, mode: 'insensitive' } },
              { subdomain: { contains: query, mode: 'insensitive' } }
            ]
          } : {}
        ]
      },
      select: {
        id: true,
        name: true,
        subdomain: true,
        logoUrl: true,
        state: true,
        city: true,
        country: true,
        theme: {
          select: {
            primaryColor: true
          }
        }
      },
      orderBy: {
        name: 'asc'
      },
      take: 20 // Limitar resultados para performance
    })

    return NextResponse.json(clubs)
  } catch (error) {
    console.error('Error searching clubs:', error)
    return NextResponse.json(
      { error: 'Failed to search clubs' },
      { status: 500 }
    )
  }
}

// Endpoint para buscar states únicos
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { type } = body

    if (type === 'states') {
      const states = await prisma.club.findMany({
        where: { active: true },
        select: { state: true },
        distinct: ['state'],
        orderBy: { state: 'asc' }
      })
      
      return NextResponse.json(states.map(s => s.state))
    }

    if (type === 'cities' && body.state) {
      const cities = await prisma.club.findMany({
        where: { 
          active: true,
          state: body.state
        },
        select: { city: true },
        distinct: ['city'],
        orderBy: { city: 'asc' }
      })
      
      return NextResponse.json(cities.map(c => c.city))
    }

    return NextResponse.json([])
  } catch (error) {
    console.error('Error fetching filter options:', error)
    return NextResponse.json(
      { error: 'Failed to fetch filter options' },
      { status: 500 }
    )
  }
}
