export async function GET(params:JSON) {
    return Response.json({message: 'Hello, from Backend!', data: params});
    
}